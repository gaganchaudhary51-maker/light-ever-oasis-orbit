import { a as saveJson, r as loadJson } from "./storage-DnV0VhCQ.mjs";
import { a as getListingsSync } from "./listing-store-CXWTTLGi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agents-CCndUtuv.js
var AGENTS = [
	{
		id: "agt-rohit",
		name: "Rohit Sharma",
		phone: "7983667722",
		area: "Golf Course Road",
		pin: "4401",
		commission: 1.5,
		status: "active"
	},
	{
		id: "agt-anjali",
		name: "Anjali Verma",
		phone: "7983667722",
		area: "DLF Phase 5",
		pin: "4402",
		commission: 1.75,
		status: "active"
	},
	{
		id: "agt-imran",
		name: "Imran Khan",
		phone: "7983667722",
		area: "Sector 54",
		pin: "4403",
		commission: 1.5,
		status: "active"
	},
	{
		id: "agt-priya",
		name: "Priya Gupta",
		phone: "7983667722",
		area: "Sohna Road",
		pin: "4404",
		commission: 2,
		status: "active"
	},
	{
		id: "agt-sandeep",
		name: "Sandeep Yadav",
		phone: "7983667722",
		area: "MG Road",
		pin: "4405",
		commission: 1.25,
		status: "active"
	}
];
var SEED_SHEET = [
	{
		id: "row-1",
		agentId: "agt-rohit",
		agentName: "Rohit Sharma",
		phone: "7983667722",
		area: "Golf Course Road",
		listingSlug: "golf-course-penthouse",
		leadName: "Amit Gupta",
		status: "Hot",
		commission: 1.5
	},
	{
		id: "row-2",
		agentId: "agt-anjali",
		agentName: "Anjali Verma",
		phone: "7983667722",
		area: "DLF Phase 5",
		listingSlug: "dlf-crest-flat",
		leadName: "Neha Saxena",
		status: "Visit",
		commission: 1.75
	},
	{
		id: "row-3",
		agentId: "agt-imran",
		agentName: "Imran Khan",
		phone: "7983667722",
		area: "Sector 54",
		listingSlug: "sector-54-penthouse",
		leadName: "Dr. Farhan Ali",
		status: "New",
		commission: 1.5
	},
	{
		id: "row-4",
		agentId: "agt-priya",
		agentName: "Priya Gupta",
		phone: "7983667722",
		area: "Sohna Road",
		listingSlug: "sohna-road-flat",
		leadName: "Rakesh Pal",
		status: "Hot",
		commission: 2
	},
	{
		id: "row-5",
		agentId: "agt-sandeep",
		agentName: "Sandeep Yadav",
		phone: "7983667722",
		area: "MG Road",
		listingSlug: "mg-road-flat",
		leadName: "Meera Kapoor",
		status: "Won",
		commission: 1.25
	}
];
function getAssignments() {
	const seed = {};
	for (const l of getListingsSync()) seed[l.slug] = l.assignedAgentId;
	return {
		...seed,
		...loadJson("assignments", {})
	};
}
function setAssignment(slug, agentId) {
	const next = {
		...getAssignments(),
		[slug]: agentId
	};
	saveJson("assignments", next);
	return next;
}
function agentByPin(pin) {
	return AGENTS.find((a) => a.pin === pin);
}
//#endregion
export { setAssignment as a, getAssignments as i, SEED_SHEET as n, agentByPin as r, AGENTS as t };
