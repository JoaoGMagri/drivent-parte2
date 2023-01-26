import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";

async function ticketsType( ) {
  const tickets = await ticketsRepository.ticketsType();
  if(!tickets) {
    throw notFoundError();
  }
  return tickets;
}

async function getTickets( userId: number  ) {
  const enrollment = await ticketsRepository.enrollmentById(userId);
  if(!enrollment) {
    throw notFoundError();
  }
  const tickets = await ticketsRepository.ticketsByIdEnrollment(enrollment.id);
  if(tickets.length === 0) {
    throw notFoundError();
  }
  return tickets;
}

const ticketsService = {
  ticketsType,
  getTickets,
};

export default ticketsService;
