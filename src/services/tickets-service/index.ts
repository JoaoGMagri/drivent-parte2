import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketsRepository from "@/repositories/tickets-repository";

async function ticketsType( ) {
  const tickets = await ticketsRepository.ticketsType();
  if(!tickets) {
    throw notFoundError();
  }
  return tickets;
}

async function getTickets( userId: number  ) {
  const enrollment = await enrollmentRepository.enrollmentById(userId);
  if(!enrollment) {
    throw notFoundError();
  }
  const tickets = await ticketsRepository.ticketsByIdEnrollment(enrollment.id);
  if(tickets.length === 0) {
    throw notFoundError();
  }
  return tickets;
}

async function postTicket(id: number, userId: number) {
  const enrollment = await enrollmentRepository.enrollmentById(userId);
  if (!enrollment) {
    throw notFoundError();
  }
  const tickets = await ticketsRepository.postTicket(enrollment.id, id);
  return tickets;
}

const ticketsService = {
  ticketsType,
  getTickets,
  postTicket
};

export default ticketsService;
