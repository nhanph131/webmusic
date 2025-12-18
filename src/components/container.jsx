const Container = ({children,style}) =>{
    return (
        <div style={{ maxWidth: "80%", margin: "0 auto", padding: "0 16px",...style }}>
            {children}
        </div>
    );
}
export default Container;