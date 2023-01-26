import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import ticketsService from "@/services/tickets-service";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try {
    const tickets = await ticketsService.ticketsType();
    res.status(httpStatus.OK).send(tickets);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(500);
  }
}

export async function getTicketsById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const tickets = await ticketsService.getTickets(userId);
    res.status(httpStatus.OK).send(tickets[0]);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(500);
  }
}

export async function postTickets(req: AuthenticatedRequest, res: Response) {
  const id = req.body.ticketTypeId;
  const { userId } = req;

  try {
    if (!id) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    const result = await ticketsService.postTicket(id, userId);

    res.status(201).send(result);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(500);
  }
}
