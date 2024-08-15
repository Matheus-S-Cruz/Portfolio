import { Col } from "react-bootstrap";

export const Cards = ({ titulo, descricao, imgUrl, link, mais }) => {

  const handleClick = () => {
    if (link) {
        window.open(link, '_blank');
    }
};

  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: 'pointer'}}>
        <img src={imgUrl} style={{ width: '100%', objectFit: 'cover' }} />
        <div className="proj-txtx">
          <h4>{titulo}</h4>
          <span>{descricao}</span>
          <span>{mais}</span>
        </div>
      </div>
    </Col>
  )
}
