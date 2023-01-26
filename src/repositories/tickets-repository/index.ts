import { prisma } from "@/config";

async function enrollmentById(userId: number) {
  return prisma.enrollment.findFirst({
    where: { userId },
  });
}

async function ticketsById() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  enrollmentById,
  ticketsById,
};

export default ticketsRepository;
