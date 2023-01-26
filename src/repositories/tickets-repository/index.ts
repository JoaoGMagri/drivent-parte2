import { prisma } from "@/config";

async function enrollmentById(userId: number) {
  return prisma.enrollment.findFirst({
    where: { userId },
  });
}

async function ticketsType() {
  return prisma.ticketType.findMany();
}

async function ticketsByIdEnrollment(id: number) {
  return prisma.ticket.findMany({
    where: {
      enrollmentId: id,
    },
    include: {
      TicketType: true,
    },
  });
}

const ticketsRepository = {
  enrollmentById,
  ticketsType,
  ticketsByIdEnrollment,
};

export default ticketsRepository;
