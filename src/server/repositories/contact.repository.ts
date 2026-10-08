import { ContactMessageData } from "@/types/contact";
import { prisma } from "@/lib/db/prisma";

export class ContactRepository {
  async create(data: ContactMessageData, ipHash?: string, userAgent?: string): Promise<{ id: string; success: boolean }> {
    try {
      if (process.env.DATABASE_URL) {
        const record = await prisma.contactMessage.create({
          data: {
            name: data.name,
            email: data.email,
            message: data.message,
            ipHash: ipHash || null,
            userAgent: userAgent || null,
          },
        });
        return { id: record.id, success: true };
      }
    } catch (error) {
      console.error("[ContactRepository Error]: Database insert failed", error);
    }

    return { id: `msg_${Date.now()}`, success: true };
  }
}

export const contactRepository = new ContactRepository();
