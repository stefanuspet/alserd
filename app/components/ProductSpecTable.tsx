import { Fragment } from "react";
import type { Dictionary } from "../i18n/dictionaries";
import type { SpecTable } from "../products/data";

const thClass =
  "border border-line px-3 py-2.5 text-left text-xs font-extrabold tracking-[0.04em] text-[#241a12] uppercase sm:text-sm";
const tdClass =
  "border border-line px-3 py-2.5 align-top text-sm text-text";

export default function ProductSpecTable({
  table,
  t,
}: {
  table: SpecTable;
  t: Dictionary["specTable"];
}) {
  return (
    <div className="mt-12 sm:mt-14">
      <div className="mb-5 text-sm font-extrabold tracking-[0.18em] text-gold uppercase">
        {table.title}
      </div>

      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <tbody>
            {table.sections.map((section) => (
              <Fragment key={section.subtitle}>
                <tr>
                  <td
                    colSpan={8}
                    className="border border-line bg-panel-alt px-3 py-2.5 text-xs font-extrabold tracking-[0.06em] text-gold uppercase sm:text-sm"
                  >
                    {section.subtitle}
                  </td>
                </tr>
                <tr key={`${section.subtitle}-header`}>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.no}
                  </th>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.product}
                  </th>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.size}
                  </th>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.weight}
                  </th>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.moistureContent}
                  </th>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.packaging}
                  </th>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.condition}
                  </th>
                  <th className={thClass} style={{ background: "#d9b26a" }}>
                    {t.aroma}
                  </th>
                </tr>
                {section.rows.map((row, i) => (
                  <tr
                    key={`${section.subtitle}-${i}`}
                    className={i % 2 === 1 ? "bg-panel-alt" : "bg-panel"}
                  >
                    <td className={tdClass}>{row.no}</td>
                    <td className={`${tdClass} font-bold text-white-bright`}>
                      {row.product}
                    </td>
                    <td className={tdClass}>{row.size}</td>
                    <td className={tdClass}>{row.weight}</td>
                    <td className={tdClass}>{row.moisture}</td>
                    <td className={tdClass}>{row.packaging}</td>
                    <td className={tdClass}>{row.condition}</td>
                    <td className={tdClass}>{row.aroma}</td>
                  </tr>
                ))}
              </Fragment>
            ))}

            <tr>
              <td
                colSpan={8}
                className="border border-line px-3 py-2.5 text-center text-xs font-extrabold tracking-[0.06em] text-[#241a12] uppercase sm:text-sm"
                style={{ background: "#d9b26a" }}
              >
                {table.derivativeTitle}
              </td>
            </tr>
            <tr>
              <th className={thClass} style={{ background: "#d9b26a" }}>
                {t.no}
              </th>
              <th className={thClass} style={{ background: "#d9b26a" }}>
                {t.product}
              </th>
              <th className={thClass} style={{ background: "#d9b26a" }}>
                {t.size}
              </th>
              <th
                className={thClass}
                colSpan={5}
                style={{ background: "#d9b26a" }}
              >
                {t.description}
              </th>
            </tr>
            {table.derivativeRows.map((row, i) => (
              <tr
                key={`derivative-${i}`}
                className={i % 2 === 1 ? "bg-panel-alt" : "bg-panel"}
              >
                <td className={tdClass}>{row.no}</td>
                <td className={`${tdClass} font-bold text-white-bright`}>
                  {row.product}
                </td>
                <td className={tdClass}>{row.size}</td>
                <td className={tdClass} colSpan={5}>
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
