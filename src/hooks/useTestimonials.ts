export type Testimonial = { textKey: string; nameKey: string; roleKey: string };

export function useTestimonials() {
    const testimonials: Testimonial[] = [
        {
            textKey: 'testimonials.items.t1.text',
            nameKey: 'testimonials.items.t1.name',
            roleKey: 'testimonials.items.t1.role',
        },
        {
            textKey: 'testimonials.items.t2.text',
            nameKey: 'testimonials.items.t2.name',
            roleKey: 'testimonials.items.t2.role',
        },
        {
            textKey: 'testimonials.items.t3.text',
            nameKey: 'testimonials.items.t3.name',
            roleKey: 'testimonials.items.t3.role',
        },
    ];
    return { testimonials };
}
