import Button from "react-bootstrap/esm/Button";

export function ResultScreen({ Marks }: { Marks: string }) {
    return (
        <>
            <div className="endscreen w-50 border-start border-top-md  border-primary ps-3">
                <h2>{Marks}</h2>
                <Button
                    onClick={() => {
                        window.location.reload();
                    }}
                >
                    Try Again ?
                </Button>
            </div>
        </>
    );
}
