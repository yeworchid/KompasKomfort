function ToursSearchSection({ filters, filterConfig, onChange, onSubmit }) {
  const firstRowFields = filterConfig.fields.slice(0, 3);
  const secondRowFields = filterConfig.fields.slice(3);

  const renderField = (field, wide = false) => {
    const className = wide ? 'col-sm-5 col-12' : 'col-sm col-12';

    if (field.type === 'select') {
      return (
        <div key={field.name} className={className}>
          <div className="form-group inline-label">
            <label className="simple w85">{field.label}</label>
            <div>
              <select className="form-control" name={field.name} value={filters[field.name]} onChange={onChange}>
                <option value="">{field.emptyOption}</option>
                {field.options.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={field.name} className={className}>
        <div className="form-group inline-label">
          <label className="simple w85">{field.label}</label>
          <div>
            <input
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              className="form-control"
              value={filters[field.name]}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="f-30">{filterConfig.title}</h1>
      </div>
      <section className="orange p-3 text-center text-white">
        <span className="f-24">{filterConfig.subtitle} </span>
        <span className="f-16">{filterConfig.subtitleNote}</span>
      </section>
      <section className="search-form-wrapper other">
        <form onSubmit={onSubmit}>
          <div className="container">
            <div className="row">
              {firstRowFields.map((field, index) => renderField(field, index === 2))}
            </div>
            <div className="row">
              {renderField(secondRowFields[0])}
              {renderField(secondRowFields[1])}
              <div className="col-sm-5 col-12">
                <div className="row">
                  <div className="col-sm col-12">{renderField(secondRowFields[2])}</div>
                  <div className="col-lg-4 col-md-5">
                    <div className="form-group inline-label">
                      <label className="dummy">&nbsp;</label>
                      <div>
                        <button type="submit" className="btn btn-primary">
                          <img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-27.png" alt="" />
                          Поиск
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default ToursSearchSection;
