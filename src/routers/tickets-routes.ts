import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsByUser } from "@/controllers/tickets-controller.js";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .use("/types", getTicketsByUser);

export { ticketsRouter };
