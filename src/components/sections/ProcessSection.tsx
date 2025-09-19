"use client"

const processSteps = [
  {
    step: "1",
    title: "Pre-Production",
    description: "We start with understanding your goals, audience, and vision. Our team develops concepts, creates scripts, and plans every detail.",
    features: ["Strategy Development", "Script Writing", "Storyboarding", "Location Scouting"],
    image: "/assets/images/Rectangle2.jpg",
    side: "left" as const
  },
  {
    step: "2",
    title: "Production",
    description: "Our experienced crew brings your vision to life with professional equipment and creative expertise.",
    features: ["Professional Filming", "Direction & Guidance", "Quality Assurance", "Collaborative Approach"],
    image: "/assets/images/Rectangle2.jpg",
    side: "right" as const
  },
  {
    step: "3",
    title: "Post-Production",
    description: "Expert editing, color correction, sound design, and final touches that make your video shine.",
    features: ["Professional Editing", "Color Grading", "Sound Design", "Revisions & Delivery"],
    image: "/assets/images/Rectangle2.jpg",
    side: "left" as const
  }
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50/5 to-white/5 rounded-t-[32px]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Our Process
          </h2>
          <p className="text-white/72 text-lg max-w-2xl mx-auto">
            A streamlined approach that ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Spine */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand"></div>

          {processSteps.map((process, index) => (
            <div key={index} className={`relative mb-16 last:mb-0 ${process.side === 'right' ? 'flex-row-reverse' : ''} flex items-center gap-8`}>
              {/* Step Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-11 h-11 bg-brand rounded-full flex items-center justify-center text-white font-bold border-2 border-white/24 z-10">
                {process.step}
              </div>

              {/* Content */}
              <div className={`flex-1 ${process.side === 'right' ? 'text-right pl-16' : 'pr-16'}`}>
                <div className={`bg-midnight-light rounded-[20px] p-6 border border-white/8 ${process.side === 'right' ? 'ml-auto' : ''} max-w-md`}>
                  <h3 className="font-display font-semibold text-white text-2xl mb-3">
                    {process.title}
                  </h3>
                  <p className="text-white/72 text-sm mb-4 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="space-y-2">
                    {process.features.map((feature, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm text-white/60 ${process.side === 'right' ? 'justify-end' : ''}`}>
                        <div className="w-1 h-1 rounded-full bg-brand"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`flex-1 ${process.side === 'right' ? 'pr-16' : 'pl-16'}`}>
                <div className="w-48 h-32 bg-gradient-to-br from-brand/30 to-brand-light/30 rounded-[20px] shadow-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}