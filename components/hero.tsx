"use client"

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 md:scroll-mt-28">
      {/* full-bleed hero image */}
      <div className="relative h-[360px] md:h-[520px] lg:h-[560px]">
        <img
          src="/placeholder.svg"
          alt="Black and white portrait facing right"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* subtle overlay replaced with decorative background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F7a2061cbd94f426b91c4b1bf515e2061)",
          }}
        />

        {/* decorative text is part of the image; keep DOM copies hidden to match design */}
        <div className="relative z-10 mx-auto max-w-6xl h-full px-4 flex flex-col justify-center">
          <h1 className="hidden font-serif leading-none tracking-tight text-6xl md:text-8xl lg:text-9xl">jaykarun</h1>
          <p className="hidden mt-3 text-xl md:text-2xl">Visual Artist</p>
        </div>

        {/* bottom roles strip */}
        <div className="absolute inset-x-0 bottom-0 bg-foreground/80 text-background">
          <div className="mx-auto max-w-6xl px-4">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 text-xs md:text-sm">
              <li>Creative Director</li>
              <li>Graphic Designer</li>
              <li>Story Teller</li>
              <li>Poet</li>
              <li>Lyricist</li>
              <li>Photographer</li>
              <li>Tablist</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
