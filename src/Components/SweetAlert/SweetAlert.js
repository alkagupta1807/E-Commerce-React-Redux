import SweetAlert from "react-bootstrap-sweetalert";
function SweetAlertComponent({confirm,cancel,title,subtitle,type}){
return(
    <>
    <SweetAlert style={{zIndex:"1"}} title={title} onConfirm={confirm} subtitle={subtitle}
    type={type!==undefined?type:"danger"} showCancel={true} confirmBtnStyle={{backgroundColor:"blue"}}
    onCancel={cancel}>
 <h5>{subtitle}</h5>
    </SweetAlert>
    </>
)
}
export default SweetAlertComponent;