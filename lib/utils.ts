import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(details: {
  name?: string;
  phone?: string;
  eventType?: string;
  organization?: string;
  city?: string;
  date?: string;
  audience?: string;
  message?: string;
}) {
  let msg = `Hello Amit Sir,\n\nI would like to enquire about booking you for an event.`;
  if (details.name) msg += `\n\nName: ${details.name}`;
  if (details.organization) msg += `\nOrganization: ${details.organization}`;
  if (details.eventType) msg += `\nEvent Type: ${details.eventType}`;
  if (details.city) msg += `\nCity: ${details.city}`;
  if (details.date) msg += `\nDate: ${details.date}`;
  if (details.audience) msg += `\nAudience Size: ${details.audience}`;
  if (details.message) msg += `\nMessage: ${details.message}`;
  
  return encodeURIComponent(msg);
}
