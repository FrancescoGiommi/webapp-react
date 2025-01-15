export default function ReviewsForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="row d-flex" onSubmit={handleFormSubmit}>
      {/* Nome */}
      <div className="col-4">
        <label for="inputName" class="form-label">
          Nome
        </label>
        <input type="text" id="inputName" class="form-control" />
      </div>
      {/* Voto */}
      <div className="col-4">
        <label for="inputName" class="form-label">
          Voto
        </label>
        <input type="text" id="inputName" class="form-control" />
      </div>
      {/* Testo */}
      <div className="col-4">
        <label for="inputName" class="form-label">
          Testo
        </label>
        <input type="text" id="inputName" class="form-control" />
      </div>
      <div>
        <button className="btn btn-primary">Invia</button>
      </div>
    </form>
  );
}
