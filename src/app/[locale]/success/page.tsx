import Script from 'next/script'; 

function SuccessPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Script src="https://embed.typeform.com/next/embed.js" />
      <div data-tf-live="01K9SRMWZ8TT18WD0YNGB40EAZ"></div>
    </div>
  );
}

export default SuccessPage;
