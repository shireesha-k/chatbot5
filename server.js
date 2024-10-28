const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simple response function (you can expand this with more complex logic or integrate with a chatbot service)
function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return 'Hello! How can I assist you with JNTUH-related information?';
    } else if (lowerMessage.includes('courses')) {
        return 'JNTUH offers various undergraduate and postgraduate courses in engineering and technology. You can find more information on the official website: https://jntuh.ac.in/';
    } else if (lowerMessage.includes('admission')) {
        return 'Admissions to ug btech courses are done through TGEAMCET, one can also join JNTUH through TGECET(for lateral entities) similarly there are other entrance exams for each stream you can find more about it from following link https://jntuh.ac.in/' ;
    } else if (lowerMessage.includes('contact')) {
        return 'You can contact JNTUH at their official email: info@jntuh.ac.in or visit their contact page for more details.';
    } else if (lowerMessage.includes('placements')) {
            return 'JNTUH is known for one of the best placement cells in Telangana , many of the students get placed into major companies like Cred, Wipro, Amazon, Oracle, Cognizant, Mathworks, Darwin Box, TCS, Optum, Verizon etc with average package around 10-15LPA you can find out more on this from the following link https://jntuh.ac.in/';
        }
        else if (lowerMessage.includes('located')) {
            return 'The main campus of JNTUH is located in Kukatpally, Hyderabad, Telangana, India';
        }
    
    else if (lowerMessage.includes('sports')) {
            return 'JNTUH holds annual sports events namely GVK , Vilas , SPARKS  and provides an opportunity for students across all branches to participate and portray their talent . It keeps up the healthy and competitive spirit among students and encourages students to continue with their passion parallel to academics.sports like cricket, basketball,kho-kho, vollyball are encouraged. Also JNTUH has an indoor stadium for indoor sports like swimming,table tennis, carroms,badminton etc, JNTUH also have  a gym exclusively for students.';
   }   
    else if (lowerMessage.includes('results')) {
        return 'JNTUH results are posted on the website (https://jntuh.ac.in/) , students can access it using their hall ticket no. And password. Notification of Results can also be seen on the website, once the results are released students can receive their memo from examination department';
    }
    else if (lowerMessage.includes('semester')) {
        return 'You can take the exam in the next supplementary cycle';
    }
    else if (lowerMessage.includes('fee')) {
        return 'fees range between INR 35,000 to INR 1.5 lakh per year';
    }
    else if (lowerMessage.includes('labs')) {
        return 'JNTUH has multiple labs Some of them are , computer labs for btech, mtech and PhD students in computer science dept, machine labs , circuits lab in electrical dept., and many domain related workshops for various branches you can find out more about it from the official website i.e https://jntuh.ac.in/';
    }
    else if (lowerMessage.includes('Scholorship')) {
        return 'JNTUH provides scholarship on merit basis to economically weak students to encourage them. One can apply for a scholarship in the SIT block on campus , submitting a letter and required documents at the office more information can be found on the official website. https://jntuh.ac.in/';
    }
    else if (lowerMessage.includes('hostels')) {
        return 'Yes, with separate hostels for boys and girls on campus,first-year students are eligible for hostel accommodation,Hostels are well-maintained with necessary amenities like Wi-Fi.';
    }
    else if (lowerMessage.includes('alumini')) {
        return 'Alumini of JNTUH can be found across all prominent domains ranging from Spacex to Telgu film industry,  distinguished alumni of the college can be found at the link https://jntuh.ac.in/distinguished-alumni ';
    }
    else if (lowerMessage.includes('clubs')) {
        return 'Technical Clubs: These clubs focus on enhancing technical skills through workshops, hackathons, and seminars. Examples include coding clubs, robotics clubs, and electronics clubs, which help students stay updated with industry trends.Cultural Clubs: Cultural clubs encourage artistic expression and celebrate cultural diversity. They cover music, dance, drama, and literature, offering students an outlet for creative engagement and talent showcasing.Sports and Fitness Clubs: Sports clubs promote physical fitness and teamwork, often through regular training, matches, and competitions. These include cricket, football, basketball, and athletics clubs.Entrepreneurship and Innovation Clubs: These clubs foster an entrepreneurial spirit, offering sessions on startups, business development, and innovation challenges. They aim to inspire students interested in creating new business ventures.Social and Environmental Clubs: Focused on social causes and environmental awareness, these clubs organize community service activities, clean-up drives, and awareness campaigns, allowing students to contribute positively to society.Literary and Debate Clubs: For students interested in public speaking, debating, and literature, these clubs conduct activities to improve communication skills, encourage critical thinking, and explore different genres of literature.'
    }
    else if(lowerMessage.includes("cse dept")){
        return 'Comuter Science  Department Its one of the departments of JNTUH one can reach the computer science dept. From taking first left from main gate walk for 3-5 minutes . It is one of the  leading departments of the  college. It has the highest placement rates over years.';
    }
    else if(lowerMessage.includes("library")){
        return 'Collections and Resources: The library has a substantial collection of books, journals, e-books, and periodicals, focusing heavily on engineering, technology, science, and management. This includes national and international journals, technical magazines, and research papers, allowing for in-depth study and research.Digital Library: The digital section provides access to e-journals, databases, and e-books from major publishers. This resource helps students and faculty access research and academic papers on demand, essential for ongoing education and research.Reading Spaces and Facilities: Designed with ample reading areas and quiet zones, the library offers an environment conducive to studying. There are both individual and group study spaces, allowing students to focus or collaborate as needed.Library Services: In addition to book lending, the library offers services like document delivery, inter-library loans, and reprographic services. They also have a robust system for cataloging and locating materials, making resources easy to access.Access for Research and PhD Scholars: The library is particularly well-equipped for research students, including PhD candidates, offering specialized collections, research assistance, and study rooms designated for advanced research work.Working Hours: To accommodate the varied schedules of students and faculty, the library generally has extended working hours, sometimes even offering 24/7 access during peak times, like exams and project deadlines.';
    }
    else if(lowerMessage.includes("departments")){
        return 'JNTUH has multiple departments such as Computer science dept., electrical and electronics engineering dept., electrical communication engineering dept , mechanical dept., civil dept., physics dept. Chemistry dept. Etc you can find more information from the official website https://jntuh.ac.in/';
    }
    else if(lowerMessage.includes("data science club ")){
        return 'It is one the youngest clubs of JNTUH launched in 2023 , its an active club with a core team of , Bhavani Kashyap, Vaibhavi, Rohith Kiran ,Sai Rithika Nandini Maharaj, Sindu ,Jeevin and few more . The team conducts several ,events recently conducted meet and greet,abcs of ML and chatbot buildathon';
    }
    else if(lowerMessage.includes("coordinator")){
       return 'the faculty coordinator of this club is Aarthi mam';
    }
    else if(lowerMessage.includes("college life")){
         return 'Life at JNTUH is a dynamic mix of rigorous academics, vibrant student culture, and diverse extracurriculars. Known for its strong engineering programs, the university offers well-equipped labs, a resourceful library, and active clubs for tech and culture enthusiasts. Students enjoy annual events like Technozion and Konnekt, fostering community and creativity. With ample career support, including industry placements and skill-building workshops, JNTUH prepares students for future success while creating lasting memories in a competitive, yet friendly, environment.';
    }
    else if(lowerMessage.includes("fest")){
        return 'JNTUH hosts vibrant annual events, with Technozion as the technical fest, featuring workshops, coding contests, and guest lectures on cutting-edge technology. The cultural fest, Konnekt, brings music, dance, and drama, offering students a platform to showcase talents and celebrate diversity. Sports competitions and literary festivals add to the excitement, encouraging team spirit and creativity. These events are not only fun but also foster networking, skill development, and lasting friendships, making them highlights of the JNTUH experience.';
    }
    else if(lowerMessage.includes("what is jntuh")){
        return 'JNTUH stands out for its rigorous engineering programs, cutting-edge research opportunities, and strong industry connections. The university boasts a well-equipped campus with advanced labs, a comprehensive library, and active placement support, drawing top recruiters. Annual fests like Technozion and Konnekt, along with sports events, enrich student life, blending academics with cultural and technical experiences. Known for its diverse student body and competitive spirit, JNTUH fosters skill development, innovation, and lifelong connections, making it a hub for aspiring engineers.';
    }
    else if(lowerMessage.includes("ranking")){
        return 'As of its latest accreditation, JNTUH has been awarded an "A" grade by the National Assessment and Accreditation Council (NAAC), reflecting its commitment to academic excellence, research, and infrastructure. This grade is a strong indicator of JNTUH’s quality in teaching, learning, research, and student support services.';
    }
    else if(lowerMessage.includes("canteen")){
       return 'The JNTUH canteen is a bustling spot on campus where students unwind, grab meals, and socialize. Known for its affordable pricing, it offers a variety of snacks, meals, and beverages that cater to student tastes. From spicy Indian dishes to quick bites, the menu is diverse and serves both vegetarians and non-vegetarians. With a lively, friendly atmosphere, it’s a go-to place for students between classes, making it a favorite hangout for casual conversations and relaxation.';
    }
    else if(lowerMessage.includes("ground")){
     return 'The JNTUH (Jawaharlal Nehru Technological University Hyderabad) Ground is a well-known sports venue located within the universitys campus in Hyderabad, Telangana. It serves as a multifunctional arena, hosting various sports events, tournaments, and cultural activities. Known for its expansive and well-maintained field, it accommodates a range of sports like cricket, football, athletics, and other university-level events. The ground often becomes a gathering spot for students, especially during annual college festivals, inter-collegiate competitions, and other university events, making it a hub for both sports and community gatherings on campus.';
    }
    else if(lowerMessage.includes("indoor stadium")){
        return 'JNTUH has an indoor stadium for indoor sports like swimming,table tennis, carroms,badminton etc, JNTUH also have  a gym exclusively for students.';
    }
    else if(lowerMessage.includes("auditoriam")){
        return 'JNTUH has mainly two auditoriums and JN auditorium with capacity of 500-1000 and UGC auditorium with slightly less capacity which be venue for many prominent events throughout year';
    }
    else if(lowerMessage.includes("J-hub")){
        return 'J-Hub, or the Jawaharlal Nehru Technological University Hyderabad Innovation Hub, is a dynamic platform that nurtures student entrepreneurship and innovation. It provides resources, mentorship, and a collaborative environment for developing ideas into startups. J-Hub supports projects in technology, engineering, and business, empowering students to create real-world solutions.';
    }
    else if(lowerMessage.includes("vice chanceller")){
        return 'Sri Burra Venkatesham ,IASYou can know more about current dignitires from following website  https://jntuh.ac.in/contact-us ';
    }
    else if(lowerMessage.includes("principal")){
        return 'Principal Dr. G. Venkata Narasimha ReddYou can know more bout current dignitires from following website https://jntuh.ac.in/contact-us ';
    }
    else if(lowerMessage.includes("Registrar")){
        return 'RegistrarProf. k Venkateswar Rao You can know more bout current dignitires from following website https://jntuh.ac.in/contact-us ';
    }
    else if(lowerMessage.includes("Administrator block")){
        return 'The "administrative block" at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) typically refers to the main building where administrative tasks, such as admissions, examination processing, certification, and other university-related bureaucratic work, take place. Here are some key functions often handled in JNTUH’s administrative block:xamination and Results: Overseeing exam schedules, processing results, and addressing any issues related to grading.';
    }
    else if(lowerMessage.includes("Rector")){
        return 'Dr. K Vijaya Kumar ReddyYou can know more about current dignitires from following website https://jntuh.ac.in/contact-us ';
    }
    else if(lowerMessage.includes("NRI")){
        return 'The allotment process also requires specific documentation, including proof of NRI status, admission proof, and fee payment. Fees for international students may differ slightly based on amenities provided.';
    }
    else if(lowerMessage.includes("holidays")){
        return 'special holodays will be there  for festivals and second saturdays';
    }
    else {
        return 'You can find jntuh related inforamtion.How can i assist you with jntuh related inforamton?';
    }
}

app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    const reply = generateResponse(message);
    res.json({ reply });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});