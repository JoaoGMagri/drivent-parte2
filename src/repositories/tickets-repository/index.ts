import { prisma } from "@/config";

async function ticketsById(userId: number) {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  ticketsById,
};

export default ticketsRepository;
