import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";

async function ticketsById( ) {
  const tickets = await ticketsRepository.ticketsById();
  if(!tickets) {
    throw notFoundError();
  }
  return tickets;
}

const ticketsService = {
  ticketsById,
};

export default ticketsService;
