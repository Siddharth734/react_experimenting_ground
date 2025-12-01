import React from 'react'

//A fallback component so that the wrhole app doesn't crash

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }

    componentDidCatch(error, info){
        console.error("Error caught:", error, info);
    }

    render(){
        if(this.state.hasError){
            return <div className="card error">Something went wrong.</div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary