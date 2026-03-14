function ToursSearchSection({ filters, options, onChange, onSubmit }) {
  return (
    <>
      <div className="container">
        <h1 className="f-30">Однодневные туры</h1>
      </div>
      <section className="orange p-3 text-center text-white">
        <span className="f-24">Быстрый поиск туров </span>
        <span className="f-16">(пожалуйста выберите параметры):</span>
      </section>
      <section className="search-form-wrapper other">
        <form onSubmit={onSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm col-12"><div className="form-group inline-label"><label className="simple w85">Тип тура</label><div><select className="form-control" name="type" value={filters.type} onChange={onChange}><option value="">Bсе типы</option>{options.types.map((item) => <option key={item} value={item}>{item}</option>)}</select></div></div></div>
              <div className="col-sm col-12"><div className="form-group inline-label"><label className="simple w85">выбор страны</label><div><select className="form-control" name="country" value={filters.country} onChange={onChange}><option value="">Все страны</option>{options.countries.map((item) => <option key={item} value={item}>{item}</option>)}</select></div></div></div>
              <div className="col-sm-5 col-12"><div className="form-group inline-label"><label className="simple w85">выбор по названию тура</label><div><input type="text" name="search" placeholder="задать название тура" className="form-control" value={filters.search} onChange={onChange} /></div></div></div>
            </div>
            <div className="row">
              <div className="col-sm col-12"><div className="form-group date inline-label"><label className="simple w85">дата от</label><div><input type="text" name="dateFrom" placeholder="07.12.2025" className="form-control" value={filters.dateFrom} onChange={onChange} /></div></div></div>
              <div className="col-sm col-12"><div className="form-group date inline-label"><label className="simple w85">дата до</label><div><input type="text" name="dateTo" placeholder="29.12.2025" className="form-control" value={filters.dateTo} onChange={onChange} /></div></div></div>
              <div className="col-sm-5 col-12"><div className="row"><div className="col-sm col-12"><div className="form-group inline-label"><label className="simple w85">город отправления</label><div><select className="form-control" name="city" value={filters.city} onChange={onChange}><option value="">Все</option>{options.cities.map((item) => <option key={item} value={item}>{item}</option>)}</select></div></div></div><div className="col-lg-4 col-md-5"><div className="form-group inline-label"><label className="dummy">&nbsp;</label><div><button type="submit" className="btn btn-primary"><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-27.png" alt="" />Поиск</button></div></div></div></div></div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default ToursSearchSection;
