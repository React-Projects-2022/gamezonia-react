import "./../styles/cart.css";
export const Cart = () => {
    // document.getElementById("mySidenav").style.width = "250px";
    /* Set the width of the side navigation to 250px */
    const openNav = ()  => document.getElementById("mySidenav").style.width = "250px";
  
  /* Set the width of the side navigation to 0 */
  const closeNav = () => document.getElementById("mySidenav").style.width = "0";
  return (
    <>
      <h1>Shopping cart</h1>
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
};
