import { prisma } from "@/config";
import { CreatePaymentParams } from "@/protocols";

async function findByTicketId(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId,
    },
  });
}

async function createPayment(body: CreatePaymentParams, value: number) {
  return prisma.payment.create({
    data: {
      ticketId: body.ticketId,
      cardIssuer: body.cardData.issuer,
      cardLastDigits: body.cardData.number.slice(-4),
      value,
    },
  });
}

const paymentRepository = {
  findByTicketId,
  createPayment,
};

export default paymentRepository;
