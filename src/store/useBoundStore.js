// store/useBoundStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useBoundStore = create(
	persist(
		(set) => ({
			isLowPerformanceMode: false,
			show3DModel: false,
			isPerformanceModalOpen: false,

			disable3D: () => set({ show3DModel: false, isLowPerformanceMode: true }),
			enable3D: () => set({ show3DModel: true, isLowPerformanceMode: false }),
			toggle3D: () =>
				set((state) => ({
					show3DModel: !state.show3DModel,
					isLowPerformanceMode: state.show3DModel,
				})),
			openPerformanceModal: () => set({ isPerformanceModalOpen: true }),
			closePerformanceModal: () => set({ isPerformanceModalOpen: false }),
		}),
		{
			name: 'app-session-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);