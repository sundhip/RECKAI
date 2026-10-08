import { ContactInput, contactSchema } from "@/lib/validation/contact";
import { contactRepository } from "@/server/repositories/contact.repository";

export class ContactService {
  async submitContact(
    rawInput: unknown,
    ipHash?: string,
    userAgent?: string
  ): Promise<{ success: boolean; contactId?: string; error?: string }> {
    const parseResult = contactSchema.safeParse(rawInput);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues.map((i) => i.message).join(", ");
      return { success: false, error: errorMsg };
    }

    const data: ContactInput = parseResult.data;
    const result = await contactRepository.create(data, ipHash, userAgent);

    return { success: true, contactId: result.id };
  }
}

export const contactService = new ContactService();
