

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            backgroundColor: currentPage === index + 1 ? '#3b82f6' : '#fff',
            color: currentPage === index + 1 ? '#fff' : '#333',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: currentPage === index + 1 ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
