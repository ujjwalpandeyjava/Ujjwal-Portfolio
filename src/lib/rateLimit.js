/**
 * In-memory token bucket / sliding window rate limiter.
 * Designed to prevent spam / DoS attacks on serverless or Node.js Next.js route handlers.
 */

const tracker = new Map();

// Periodic cleanup every 5 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
	const CLEANUP_INTERVAL = 5 * 60 * 1000;
	setInterval(() => {
		const now = Date.now();
		for (const [key, record] of tracker.entries()) {
			if (record.resetAt <= now) {
				tracker.delete(key);
			}
		}
	}, CLEANUP_INTERVAL).unref?.();
}

/**
 * Checks if a given identifier exceeds the allowed rate limit.
 * @param {string} identifier - Client IP or unique tracking key.
 * @param {Object} options
 * @param {number} [options.limit=5] - Maximum requests allowed in the time window.
 * @param {number} [options.windowMs=600000] - Window duration in milliseconds (default 10 mins).
 * @returns {{ allowed: boolean, remaining: number, resetAt: number, retryAfterSeconds: number }}
 */
export function checkRateLimit(identifier, { limit = 5, windowMs = 10 * 60 * 1000 } = {}) {
	const now = Date.now();
	const cleanId = identifier || 'unknown-client';
	const existing = tracker.get(cleanId);

	if (!existing || existing.resetAt <= now) {
		const resetAt = now + windowMs;
		tracker.set(cleanId, { count: 1, resetAt });
		return {
			allowed: true,
			remaining: limit - 1,
			resetAt,
			retryAfterSeconds: Math.ceil(windowMs / 1000)
		};
	}

	if (existing.count >= limit) {
		const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
		return {
			allowed: false,
			remaining: 0,
			resetAt: existing.resetAt,
			retryAfterSeconds
		};
	}

	existing.count += 1;
	const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
	return {
		allowed: true,
		remaining: limit - existing.count,
		resetAt: existing.resetAt,
		retryAfterSeconds
	};
}

/**
 * Helper to extract client IP from Next.js request headers.
 * @param {Request} request
 * @returns {string}
 */
export function getClientIp(request) {
	const forwarded = request.headers.get('x-forwarded-for');
	if (forwarded) {
		return forwarded.split(',')[0].trim();
	}
	const realIp = request.headers.get('x-real-ip');
	if (realIp) {
		return realIp.trim();
	}
	const cfIp = request.headers.get('cf-connecting-ip');
	if (cfIp) {
		return cfIp.trim();
	}
	return '127.0.0.1';
}
