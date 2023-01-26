import { prisma } from "@/config";

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

const ticketsRepository = {
  ticketsType,
  ticketsByIdEnrollment,
  postTicket,
};

export default ticketsRepository;
