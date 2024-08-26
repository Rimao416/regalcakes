function Box({ commentaire, nom, photo, role }) {
  return (
    <div className="container">
      <p className="container__comment">{commentaire}</p>
      <div className="container__author">
        <img src={photo} alt="" />
        <p>
          {nom} <span>{role}</span>
        </p>
      </div>
    </div>
  );
}

export default Box;
