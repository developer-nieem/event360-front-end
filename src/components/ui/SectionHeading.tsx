
type TSectionHEading = {
    heading : string,
    paragraph : string
}

const SectionHeading = ({heading, paragraph} : TSectionHEading) => {
    return (
        <div className="text-center text-white space-y-3 pt-24">
        <img className="mx-auto -mb-[70px]" src="/Vector14.png" alt="service" />
            <h2 className="text-6xl font-bold  ">{heading}</h2>
           
            <p className="max-w-[70ch] mx-auto">{paragraph}</p>

        </div>
    );
};

export default SectionHeading;