import Image from "next/image";
import type { BriquetteSheet } from "../products/data";

export default function BriquetteSpecSheet({
  sheets,
}: {
  sheets: BriquetteSheet[];
}) {
  return (
    <div className="mt-12 space-y-14 sm:mt-14">
      {sheets.map((sheet) => (
        <div
          key={sheet.name}
          className="overflow-hidden rounded-lg border border-line bg-panel-alt"
        >
          <div className="flex flex-col gap-2 border-b border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <h3 className="font-serif text-xl font-bold text-white-bright sm:text-2xl">
              {sheet.name}
            </h3>
            {sheet.moq ? (
              <span className="text-xs font-extrabold tracking-[0.08em] text-gold uppercase">
                MoQ: {sheet.moq}
              </span>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2 sm:p-8">
            <div>
              <div className="mb-4 text-xs font-extrabold tracking-[0.18em] text-gold uppercase">
                Product Specifications
              </div>

              {sheet.features ? (
                <ul className="mb-5 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1 sm:flex sm:flex-wrap sm:gap-2">
                  {sheet.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-gold/40 bg-bg px-3 py-1 text-xs font-semibold text-gold sm:inline-block"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : null}

              <dl className="divide-y divide-line">
                {sheet.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-4 py-2.5 text-sm"
                  >
                    <dt className="text-text-dim">{spec.label}</dt>
                    <dd className="text-right font-semibold text-white-bright">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="mb-4 text-xs font-extrabold tracking-[0.18em] text-gold uppercase">
                Available Size
              </div>
              <div className="space-y-4">
                {sheet.sizes.map((group) => (
                  <div key={group.shape}>
                    <div className="mb-1.5 text-sm font-bold text-white-bright">
                      {group.shape}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.dimensions.map((dim) => (
                        <span
                          key={dim}
                          className="rounded-sm border border-line bg-bg px-2.5 py-1 text-xs text-text"
                        >
                          {dim}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-xs font-extrabold tracking-[0.18em] text-gold uppercase">
                Packaging
              </div>
              <ul className="mt-2 space-y-1.5">
                {sheet.packaging.map((line) => (
                  <li key={line} className="text-sm text-text">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {sheet.images ? (
            <div
              className="grid gap-3 border-t border-line p-6 sm:gap-4 sm:p-8"
              style={{
                gridTemplateColumns: `repeat(${Math.min(sheet.images.length, 3)}, minmax(0, 1fr))`,
              }}
            >
              {sheet.images.map((image) => (
                <div
                  key={image}
                  className="relative h-40 w-full overflow-hidden rounded-md border border-line bg-panel sm:h-52"
                >
                  <Image
                    src={image}
                    alt={sheet.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
