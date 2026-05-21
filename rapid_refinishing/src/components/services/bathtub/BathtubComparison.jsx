//src/components/services/bathtub/BathtubComparison.jsx
import "./css/bathtubComparison.css";

export default function BathtubComparison() {
  return (
    <section className="bathtub-comparison-section">
      <div className="bathtub-container">
        <div className="comparison-wrapper">

          <h2>
            Time & Cost Comparison For A Standard 5’
            <br />
            Tub & Enclosure
          </h2>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">

              <thead>
                <tr>
                  <th></th>
                  <th>Removal & Replacement</th>
                  <th>Rapid Refinishing Co.</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Demolition (Includes disposal & removal)</td>
                  <td>$850</td>
                  <td>$0</td>
                </tr>

                <tr>
                  <td>Tub replacement cost</td>
                  <td>$350</td>
                  <td>$0</td>
                </tr>

                <tr>
                  <td>Plumber Cost</td>
                  <td>$550</td>
                  <td>$0</td>
                </tr>

                <tr>
                  <td>Tile Setter</td>
                  <td>$650</td>
                  <td>$0</td>
                </tr>

                <tr>
                  <td>Carpentry, caulking, floor repairs, etc.</td>
                  <td>$850</td>
                  <td>$0</td>
                </tr>

                <tr className="highlight-row">
                  <td>Grand total after replacement</td>
                  <td>$3,250</td>
                  <td>$490 - $650</td>
                </tr>

                <tr>
                  <td>Duration without bathtub</td>

                  <td>
                    <strong>7 - 10 Days</strong>
                  </td>

                  <td className="benefit-column">

                    <ul>
                      <li>1 short day for work</li>
                      <li>1 day for cure</li>
                      <li>
                        5 years of peace of mind backed
                        by Rapid Refinishing Co.
                      </li>
                    </ul>

                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </section>
  );
}