import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	fullName: "",
	nationalID: "",
	createdAt: "",
};

const customerSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		createCustomer: {
			prepare(fullName, nationalID) {
				return {
					payload: {
						fullName,
						nationalID,
						createdAt: new Date().toISOString(),
					},
				};
			},
			reducer(state, action) {
				state.fullName = action.payload.fullName;
				state.nationalID = action.payload.nationalID;
				state.createdAt = action.payload.createdAt;
			},
		},
		updatedName(state, action) {
			state.fullName = action.payload;
		},
	},
});

export const { createCustomer, updatedName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case "customer/createCustomer":
// 			return {
// 				...state,
// 				fullName: action.payload.fullName,
// 				nationalID: action.payload.nationalID,
// 				createAt: action.payload.createAt,
// 			};

// 		case "customer/updateName":
// 			return { ...state, fullName: action.payload };

// 		default:
// 			return state;
// 	}
// }

// export function createCustomer(fullName, nationalID) {
// 	return {
// 		type: "customer/createCustomer",
// 		payload: {
// 			fullName,
// 			nationalID,
// 			createAt: new Date().toISOString(),
// 		},
// 	};
// }

// export function updateName(fullName) {
// 	return { type: "customer/updateName", payload: fullName };
// }
