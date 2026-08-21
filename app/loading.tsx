export default function Loading() {
  return (
    <main className="route-loading" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading page content…</span>
      <div className="route-loading-hero">
        <div className="container">
          <span />
          <strong />
          <i />
        </div>
      </div>
      <div className="container route-loading-grid" aria-hidden="true">
        {[1, 2, 3].map((item) => <div key={item}><span /><strong /><i /><i /></div>)}
      </div>
    </main>
  );
}
