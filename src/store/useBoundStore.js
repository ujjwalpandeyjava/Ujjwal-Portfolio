// store/useBoundStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useBoundStore = create(
	persist(
		(set) => ({
			isLowPerformanceMode: false,
			show3DModel: true,

			disable3D: () => set({ show3DModel: false, isLowPerformanceMode: true }),
			enable3D: () => set({ show3DModel: true, isLowPerformanceMode: false }),
		}),
		{
			name: 'app-session-storage',
			// Change this from localStorage to sessionStorage
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);