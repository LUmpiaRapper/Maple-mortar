"use client";

import { useActionState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { submitContact, type FormState } from "./actions";
import MapIllustration from "@/components/map-illustration";

const hours = [
  { day: "Monday — Friday", hours: "6:30 AM — 7:00 PM" },
  { day: "Saturday", hours: "7:00 AM — 8:00 PM" },
  { day: "Sunday", hours: "7:30 AM — 5:00 PM" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const infoItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

const initialState: FormState = { success: false, message: "" };

function ContactForm({ shouldAnimate }: { shouldAnimate: boolean }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.success && state.message) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <CheckCircle className="w-12 h-12 text-accent mb-4" />
        <p className="text-heading font-serif text-lg">{state.message}</p>
      </motion.div>
    );
  }

  return (
    <form className="space-y-5" action={formAction}>
      <div>
        <label htmlFor="name" className="block text-sm text-heading mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-lg text-sm text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-heading mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-lg text-sm text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-heading mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-lg text-sm text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
        />
      </div>
      <motion.button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-bg-primary font-medium rounded-full hover:bg-accent-light transition-all duration-200 text-sm active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={shouldAnimate && !pending ? { scale: 1.02 } : undefined}
        whileTap={shouldAnimate && !pending ? { scale: 0.97 } : undefined}
      >
        {pending ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4" />
      </motion.button>
    </form>
  );
}

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary"
            animate={
              shouldAnimate
                ? {
                    background: [
                      "linear-gradient(135deg, #050302, #1c1510, #050302)",
                      "linear-gradient(135deg, #0a0604, #1c1510, #0a0604)",
                      "linear-gradient(135deg, #050302, #1c1510, #050302)",
                    ],
                  }
                : undefined
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-4"
            initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-body text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Questions, feedback, or just want to say hi? We&rsquo;d love to hear
            from you.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <motion.div
              className="md:col-span-3"
              initial={shouldAnimate ? "hidden" : undefined}
              whileInView={shouldAnimate ? "visible" : undefined}
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <h2 className="font-serif text-2xl text-heading mb-6">
                Send a Message
              </h2>
              <ContactForm shouldAnimate={shouldAnimate} />
            </motion.div>

            <motion.div
              className="md:col-span-2 space-y-8"
              initial={shouldAnimate ? "hidden" : undefined}
              whileInView={shouldAnimate ? "visible" : undefined}
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div custom={0} variants={infoItemVariants}>
                <h3 className="font-serif text-lg text-heading mb-4">
                  Visit Us
                </h3>
                <div className="space-y-4 text-sm">
                  <p className="flex items-start gap-3 text-body-muted">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    42 Maple Street<br />
                    Birchwood Hollow, NH 03456
                  </p>
                  <p className="flex items-center gap-3 text-body-muted">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    (555) 123-4567
                  </p>
                  <p className="flex items-center gap-3 text-body-muted">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    hello@mapleandmortar.com
                  </p>
                </div>
              </motion.div>

              <motion.div custom={1} variants={infoItemVariants}>
                <h3 className="font-serif text-lg text-heading mb-4">
                  Hours
                </h3>
                <div className="space-y-2">
                  {hours.map((entry) => (
                    <div key={entry.day} className="flex items-start gap-3 text-sm">
                      <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-heading">{entry.day}</span>
                        <span className="text-body-muted ml-2">{entry.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div custom={2} variants={infoItemVariants}>
                <h3 className="font-serif text-lg text-heading mb-3">
                  Find Us
                </h3>
                <motion.div
                  className="aspect-[4/3] rounded-card overflow-hidden bg-bg-card border border-border/50"
                  whileHover={shouldAnimate ? { borderColor: "rgba(203, 143, 63, 0.3)" } : undefined}
                  transition={{ duration: 0.3 }}
                >
                  <MapIllustration className="h-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
