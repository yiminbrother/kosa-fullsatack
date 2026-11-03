import styles from "./Exam05ExternalCss.module.css";  

import ChildComponent from "./ChildComponent";
export default function Exam05ExternalCss() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam05ExternalCss</h2>
      </header>
      <div className="space-y-5 p-5">
        <div className={styles.example}>외부 CSS 스타일 적용</div>
        <ChildComponent/>
      </div>
    </section>
    
  );
}
