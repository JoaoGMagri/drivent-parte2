import ticketsRepository from "@/repositories/tickets-repository";

async function ticketsById(userId: number) {
  const tickets = await ticketsRepository.ticketsById(userId);
  return tickets;
}

const ticketsService = {
  ticketsById,
};

export default ticketsService;
