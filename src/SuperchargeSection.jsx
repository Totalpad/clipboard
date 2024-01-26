import IconBlackList from "./IconBlackList";
import IconPreview from "./IconPreview";
import IconText from "./IconText";

function SuperchargeSection() {
  return (
    <section id="supercharge">
      <div className="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p className="section-content mb-16 ">
          We've got the tools to boost your productivity.
        </p>

        {/* Items container */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
          {/* 1 item */}
          <div className="flex flex-col items-center space-y-5">
            <IconBlackList />
            <h5>Create Blacklists</h5>
            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          {/* 2 item */}
          <div className="flex flex-col items-center space-y-5">
            <IconText />
            <h5>Plain Text Snippets</h5>
            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          {/* 3 item */}
          <div className="flex flex-col items-center space-y-5">
            <IconPreview />
            <h5>Sneak Preview</h5>
            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuperchargeSection;
