import { prisma } from "@/config";

async function ticketsType() {
  return prisma.ticketType.findMany();
}

async function findUniqueById(id: number) {
  return prisma.ticket.findFirst({
    where: {
      id,
    },
  });
}

async function findTypeById(id: number) {
  return prisma.ticketType.findFirst({
    where: {
      id,
    },
  });
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

async function postTicket(enrollmentId: number, ticketTypeId: number) {
  return prisma.ticket.create({
    data: {
      enrollmentId,
      ticketTypeId,
      status: "RESERVED"
    },
    include: {
      TicketType: true
    }
  });
}

async function updateTicket(id: number) {
  return prisma.ticket.update({
    where: {
      id,
    },
    data: {
      status: "PAID",
    },
  });
}

const ticketsRepository = {
  ticketsType,
  ticketsByIdEnrollment,
  postTicket,
  findUniqueById,
  findTypeById,
  updateTicket,
};

export default ticketsRepository;
