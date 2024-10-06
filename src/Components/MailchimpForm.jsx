import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from "./NewsLetter";

const MailchimpForm = () => {
    const url =  "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
  return (
    <>
      <MailchimpSubscribe
        url={ url }
        render={({ subscribe , status , message }) => (
            <NewsLetter 
                onValidated={formData => subscribe(formData)}
                status={ status }
                message={ message }
            />
        )}
      />
    </>
  )
}

export default MailchimpForm
