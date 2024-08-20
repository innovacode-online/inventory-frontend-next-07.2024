
interface Params {
    params: {
        slug: string
    }
}

export default function ProductPage({ params }: Params) {
    return (
        <div>
            <h1>{ params.slug }</h1>
        </div>
    );
}
