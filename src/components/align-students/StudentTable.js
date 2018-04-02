import React from 'react';

class StudentTable extends React.Component{
    constructor(props){
        super(props);
        this.mapStudentsToRows = this.mapStudentsToRows.bind(this);
    }

    mapStudentsToRows(){
        return this.props.students.map(
            (student,i) => (
                <div className={"student-table-row"} key={i}>
                    <div className={"id-cell student-table-cell"}>
                        {student.nuid}
                    </div>
                    <div className={"name-cell student-table-cell"}>
                        {student.name}
                    </div>
                    <div className={"email-cell student-table-cell"}>
                        {student.email}
                    </div>
                    <div className={"enrollment-status-cell student-table-cell"}>
                        {student.enrollmentStatus}
                    </div>
                    <div className={"degree-year-cell student-table-cell"}>
                        {student.degreeYear}
                    </div>
                </div>)
        );
    }

    render(){
        return (
            <div className={"student-table"}>
                <div className={"student-table-head"}>
                    <div className={"id-cell student-table-cell"}>
                        NUID
                    </div>
                    <div className={"name-cell student-table-cell"}>
                        Name
                    </div>
                    <div className={"email-cell student-table-cell"}>
                        Email
                    </div>
                    <div className={"enrollment-status-cell student-table-cell"}>
                        Enrollment Status
                    </div>
                    <div className={"degree-year-cell student-table-cell"}>
                        Degree Year
                    </div>
                </div>
                {this.mapStudentsToRows()}
            </div>
        );
    }
}

export default StudentTable;