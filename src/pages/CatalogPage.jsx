// src/pages/CatalogPage.jsx
// Página del catálogo de semillas disponibles
// Actualizado para Paso 9: Transiciones y feedback visual

import { useState } from 'react'

function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div style={styles.container} className="page-transition gpu-accelerated">
      {/* Header de la página */}
      <div style={styles.header}>
        <h1 style={styles.title}>🌱 Catálogo de Semillas</h1>
        <p style={styles.subtitle}>
          Explora las semillas disponibles para intercambio
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div style={styles.searchSection}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Buscar semillas..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={styles.clearButton}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filtros rápidos */}
      <div style={styles.filtersSection}>
        <h3 style={styles.filtersTitle}>Filtros</h3>
        <div style={styles.filterButtons}>
          <button style={styles.filterButton}>🌽 Cereales</button>
          <button style={styles.filterButton}>🥬 Hortalizas</button>
          <button style={styles.filterButton}>🫘 Legumbres</button>
          <button style={styles.filterButton}>🌿 Hierbas</button>
          <button style={styles.filterButton}>🍎 Frutales</button>
        </div>
      </div>

      {/* Lista de semillas */}
      <div style={styles.seedsSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Semillas Disponibles</h2>
          <span style={styles.resultsCount}>0 resultados</span>
        </div>

        {/* Estado vacío */}
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🌱</div>
          <h3 style={styles.emptyTitle}>No hay semillas registradas</h3>
          <p style={styles.emptyText}>
            Cuando otros usuarios registren sus semillas, aparecerán aquí
          </p>
          <div style={styles.emptyActions}>
            <button style={styles.primaryButton}>
              ➕ Registrar mi primera semilla
            </button>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div style={styles.infoSection}>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>💡 ¿Cómo funciona?</h3>
          <ul style={styles.infoList}>
            <li>Explora semillas disponibles de otros agricultores</li>
            <li>Usa los filtros para encontrar lo que necesitas</li>
            <li>Contacta directamente para proponer intercambios</li>
            <li>Mantén tu propio catálogo actualizado</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Estilos mobile-first
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
    minHeight: 'calc(100vh - 140px)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '25px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  title: {
    color: '#1976d2',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
  },
  subtitle: {
    color: '#666',
    fontSize: '1rem',
    margin: '0',
  },
  searchSection: {
    marginBottom: '20px',
  },
  searchContainer: {
    position: 'relative',
    maxWidth: '400px',
    margin: '0 auto',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    backgroundColor: 'white',
    boxSizing: 'border-box',
  },
  clearButton: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    color: '#999',
    cursor: 'pointer',
    padding: '4px',
  },
  filtersSection: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  filtersTitle: {
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    margin: '0 0 15px 0',
  },
  filterButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  filterButton: {
    padding: '8px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '20px',
    backgroundColor: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  seedsSection: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    color: '#333',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    margin: '0',
  },
  resultsCount: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '20px',
    opacity: 0.5,
  },
  emptyTitle: {
    color: '#333',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  },
  emptyText: {
    color: '#666',
    fontSize: '1rem',
    margin: '0 0 25px 0',
    lineHeight: 1.5,
  },
  emptyActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  infoSection: {
    marginBottom: '20px',
  },
  infoCard: {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #bbdefb',
  },
  infoTitle: {
    color: '#1976d2',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    margin: '0 0 15px 0',
  },
  infoList: {
    color: '#1565c0',
    fontSize: '0.9rem',
    lineHeight: 1.6,
    margin: '0',
    paddingLeft: '20px',
  },
}

export default CatalogPage
