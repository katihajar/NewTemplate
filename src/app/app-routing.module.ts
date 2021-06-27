import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {WidgetsComponent} from './utilities/widgets.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';

import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {CommandesComponent} from './view/admin/commandes/commandes.component';
import {LearnComponent} from './view/admin/learn/learn.component';
import {SectionsComponent} from './view/Prof/parcrs/sections/sections.component';
import {CoursesComponent} from './view/Prof/parcrs/courses/courses.component';
import {EdCoursesComponent} from './view/Prof/parcrs/ed-courses/ed-courses.component';
import {SalaryComponent} from './view/Prof/parcrs/salary/salary.component';
import {HomeComponent} from './view/Prof/home/home.component';
import {InscriptionsComponent} from './view/Prof/inscriptions/inscriptions.component';
import {EtudiantsComponent} from './view/Prof/etudiants/etudiants.component';
import {ScheduleComponent} from './view/Prof/schedule/schedule.component';
import {QuizPreviewComponent} from './view/Prof/quiz/quiz-preview/quiz-preview.component';
import {ClassRoomListComponent} from './view/Prof/Classes/profclasses/class-room-list/class-room-list.component';
import {FaqAnswerComponent} from './view/admin/faq-admin/faq-answer/faq-answer.component';
import {NewsAdminListComponent} from './view/admin/news-admin/news-admin-list/news-admin-list.component';
import {NewsTeacherListComponent} from './view/teacher/news/news-teacher-list/news-teacher-list.component';
import {FaqListComponent} from './view/teacher/faq/faq-list/faq-list.component';
import {LoginAdminComponent} from './view/admin/login-admin/login-admin.component';
import {LoginProfComponent} from './view/teacher/login-prof/login-prof.component';
import {LoginEtudiantComponent} from './view/etudiant/login-etudiant/login-etudiant.component';
import {QuizEtudiantComponent} from './view/etudiant/quiz-etudiant/quiz-etudiant.component';
import {SectionSimulateComponent} from './view/Prof/parcrs/section-simulate/section-simulate.component';
import {InscriptionAdminComponent} from './view/admin/inscription-admin/inscription-admin.component';
import {InscriptionProfComponent} from './view/Prof/inscription-prof/inscription-prof.component';
import {HomeTeacherComponent} from './view/Prof/home-teacher/home-teacher.component';
import {RecommendationComponent} from './view/Prof/recommend/recommendation/recommendation.component';
import {RecommendComponent} from './view/Prof/recommend/recommend.component';
import {QuizCreateComponent} from './view/Prof/quiz/quiz-create/quiz-create.component';
import {ClassroomEtudiantComponent} from './view/std/classroom-etudiant/classroom-etudiant.component';
import {QuizEtudiantListComponent} from './view/std/quiz-etudiant-list/quiz-etudiant-list.component';
import {QuizEtudiantViewComponent} from './view/std/quiz-etudiant-view/quiz-etudiant-view.component';
import {SessionCoursComponent} from './view/admin/session-cours/session-cours.component';
import {SyntheseSessionComponent} from './view/admin/synthese-session/synthese-session.component';
import {ProfesseurComponent} from './view/admin/professeur/professeur.component';
import {ProfesseurListComponent} from './view/admin/professeur/professeur-list/professeur-list.component';
import {EtudiantSectionsComponent} from './view/student/student-courses/etudiant-sections/etudiant-sections.component';
import {EtudiantParcoursComponent} from './view/student/student-courses/etudiant-parcours/etudiant-parcours.component';
import {EtudiantCoursesComponent} from './view/student/student-courses/etudiant-courses/etudiant-courses.component';
import {StudentSimulateSectionComponent} from './view/student/student-courses/student-simulate-section/student-simulate-section.component';
import {RecommendAdminComponent} from './view/admin/recommend-admin/recommend-admin.component';
import {FaqCreateComponent} from './view/admin/faq-admin/faq-create/faq-create.component';
import {FaqStudentListComponent} from './view/std/faq-student/faq-student-list/faq-student-list.component';
import {FaqAdminListComponent} from './view/admin/faq-admin/faq-admin-list/faq-admin-list.component';
import {FaqContactListComponent} from './view/teacher/faq/faq-contact-list/faq-contact-list.component';
import {FaqStudentContactComponent} from './view/std/faq/faq-student-contact/faq-student-contact.component';
import {FaqStudentContactListeComponent} from './view/std/faq/faq-student-contact-liste/faq-student-contact-liste.component';
import {DictionaryCreateComponent} from './view/etudiant/dictionary-create/dictionary-create.component';
import {NewsEtudiantListComponent} from './view/std/news-etudiant/news-etudiant-list/news-etudiant-list.component';
import {PaiementComponent} from './view/admin/paiement/paiement.component';











@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardDemoComponent},
                    {path: 'pages/etudiant', component: EtudiantsComponent},
                    {path: 'pages/DictionaryCreate', component: DictionaryCreateComponent},
                    {path: 'pages/recommendAdmin', component: RecommendAdminComponent},
                    {path: 'pages/session', component: SessionCoursComponent},
                    {path: 'pages/synthese', component: SyntheseSessionComponent},
                    {path: 'view/teacherLists', component: ProfesseurListComponent},
                    {path: 'inscriptionAdmin', component: InscriptionAdminComponent},
                    {path: 'inscriptionTeacher', component: InscriptionProfComponent},
                    {path: 'view/inscription', component: InscriptionsComponent},
                    {path: 'view/recommendation', component: RecommendationComponent},
                    {path: 'view/recommendat', component: RecommendComponent},
                    {path: 'view/home-teacher', component: HomeTeacherComponent},
                    {path: 'pages/home', component: HomeComponent},
                    {path: 'pages/commande', component: CommandesComponent},
                    {path: 'pages/parcours', component: LearnComponent},
                    {path: 'pages/classes', component: ClassRoomListComponent},
                    {path: 'pages/salary', component: SalaryComponent},
                    {path: 'pages/courses', component: EdCoursesComponent},
                    {path: 'pages/etudiantcours', component: EtudiantCoursesComponent},
                    {path: 'pages/etudiantparcours', component: EtudiantParcoursComponent},
                    {path: 'pages/etudiantsections', component: EtudiantSectionsComponent},
                    {path: 'pages/etudiantsimulatesections', component: StudentSimulateSectionComponent},
                    {path: 'pages/cours', component: CoursesComponent},
                    {path: 'pages/sections', component: SectionsComponent},
                    {path: 'pages/sectionsSimulate', component: SectionSimulateComponent},
                    {path: 'pages/faq-admin', component: FaqAnswerComponent},
                    {path: 'pages/faq-create', component: FaqCreateComponent},
                    {path: 'pages/faq-admin-list', component: FaqAdminListComponent},
                    {path: 'pages/news-admin', component: NewsAdminListComponent},
                    {path: 'pages/news-teacher', component: NewsTeacherListComponent},
                    {path: 'pages/news-student', component: NewsEtudiantListComponent},
                    {path: 'pages/faq-teacher', component: FaqListComponent},
                    {path: 'pages/faq-teacher-answer', component: FaqContactListComponent},
                    {path: 'pages/faq-student', component: FaqStudentListComponent},
                    {path: 'pages/faq-student-contact', component: FaqStudentContactComponent},
                    {path: 'pages/faq-student-contact-list', component: FaqStudentContactListeComponent},
                    {path: 'pages/login-admin', component: LoginAdminComponent},
                    {path: 'pages/login-prof', component: LoginProfComponent},
                    {path: 'pages/login-etudiant', component: LoginEtudiantComponent},
                    {path: 'pages/quiz-etudiant', component: QuizEtudiantComponent},
                    {path: 'pages/quiz-create', component: QuizCreateComponent},
                    {path: 'pages/classroom-liste', component: ClassroomEtudiantComponent},
                    {path: 'pages/quiz-liste', component: QuizEtudiantListComponent},
                    {path: 'pages/quiz-view', component: QuizEtudiantViewComponent},
                    {path: 'pages/paiement', component: PaiementComponent},
                    {path: 'view/quiz-preview', component: QuizPreviewComponent},
                    {path: 'view/schedule', component: ScheduleComponent},
                    {path: 'inscriptionEtudiant', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/menu', component: MenusDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/display', component: DisplayComponent},
                    {path: 'utilities/elevation', component: ElevationComponent},
                    {path: 'utilities/flexbox', component: FlexboxComponent},
                    {path: 'utilities/grid', component: GridComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'utilities/widgets', component: WidgetsComponent},
                    {path: 'utilities/spacing', component: SpacingComponent},
                    {path: 'utilities/typography', component: TypographyComponent},
                    {path: 'utilities/text', component: TextComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent}
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: '404', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
