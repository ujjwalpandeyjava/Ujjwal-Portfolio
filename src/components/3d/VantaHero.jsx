"use client";

import VantaBirds from "@/components/3d/VantaBirds";
import style from "@/styles/VantaHero.module.scss";

export default function VantaHero({ title, subtitle, badge, action }) {
	return (
		<VantaBirds>
			{badge && (
				<div className={style.heroBadge}>
					{badge}
				</div>
			)}
			
			<h1 className={style.heroTitle}>{title}</h1>
			<p className={style.heroSubtitle}>{subtitle}</p>
			
			{action && (
				<div className={style.heroActions}>
					{action}
				</div>
			)}
		</VantaBirds>
	);
}
