// components/FilterSidebar.js
import styles from '../styles/PLP.module.css';

const sections = [
  'Ideal For',
  'Occasion',
  'Work',
  'Fabric',
  'Segment',
  'Suitable For',
  'Raw Materials',
  'Pattern'
];

export default function FilterSidebar() {
  return (
    <aside className={styles.filters}>
      <div className={styles.filterSection}>
        <label>
          <input type="checkbox" /> Customizable
        </label>
      </div>

      {sections.map(title => (
        <div key={title} className={styles.filterSection}>
          <div className={styles.filterTitle}>{title}</div>
          <select className={styles.filterSelect}>
            <option>All</option>
          </select>
        </div>
      ))}
    </aside>
  );
}
