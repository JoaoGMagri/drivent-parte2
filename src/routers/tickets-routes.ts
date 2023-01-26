import { Router } from "express";
import { authenticateToken, /* validateBody */ } from "@/middlewares";
import { getTicketsType, getTicketsById } from "@/controllers/tickets-controller";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", getTicketsById);

export { ticketsRouter };
