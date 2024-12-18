-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'IN_PROGESS', 'DONE');

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" VARCHAR(1024) NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'OPEN',

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
