export type Testimonial = {
    text: string;
    name: string;
    role: string;
};

export function useTestimonials() {
    const testimonials: Testimonial[] = [
        {
            text: '“Cursale became my right hand. Today, I close more deals with less effort.”',
            name: 'João G.',
            role: 'Closer at NuvemData',
        },
        {
            text: '“I didn’t connect a CRM and still the AI gave me great arguments. Impressive.”',
            name: 'Larissa M.',
            role: 'SDR at FastTrack',
        },
        {
            text: '“Onboarding for new reps dropped from 3 months to 3 weeks.”',
            name: 'Felipe A.',
            role: 'Head of Sales at ConsultX',
        },
    ];

    return { testimonials };
}
