import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTicketsType, getTicketsById, postTickets } from "@/controllers/tickets-controller";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", getTicketsById)
  .post("/", postTickets);

export { ticketsRouter };
